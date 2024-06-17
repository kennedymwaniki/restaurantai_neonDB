import { Context } from "hono";
import "dotenv/config";
import { createAuthUserServce, loginAuthService } from "./authService";
import bycrpt from "bcrypt";
import { sign } from "hono/jwt";
import { sendWelcomeEmail } from "../servces/emails";

export const registerUser = async (c: Context) => {
  try {
    //await user from
    const user = await c.req.json();
    console.log("Controller:", user);
    //get user password
    const pass = user.password;
    // console.log(pass); //for debugging
    //hash the pasword
    const hashedPassword = await bycrpt.hash(pass, 10);
    user.password = hashedPassword;

    const createdUser = await createAuthUserServce(user);
    if (!createdUser) return c.text("User not created ", 404);

    // Send welcome email after successful user creation
    const subject = "Welcome to Our Restaurant Management System";
    const html = `
    <html>
<head>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
        .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
        }
        .header {
            background-image: url('https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
            background-size: cover;
            background-position: center;
            text-align: center;
            padding: 50px 20px;
            color: black;
        }
        .header h1 {
            font-size: 24px;
            margin: 0;
            font-weight: normal;
        }
        .header p {
            font-size: 16px;
        }
        .btn-container {
            margin-top: 20px;
        }
        .btn {
            background-color: #fcb514;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
        }
        .content {
            background-color: #333333;
            color: white;
            text-align: center;
            padding: 30px 20px;
        }
        .content h2 {
            font-size: 20px;
            margin: 0;
            font-weight: normal;
        }
        .content p {
            font-size: 14px;
        }
        .footer {
            background-color: #333333;
            color: white;
            text-align: center;
            padding: 10px 20px;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>We Serve Healthy & Delicious Foods</h1>
            <p>Dear ${user.name}, thank you for registering with us.</p>
            <div class="btn-container">
                <a href="restaurantapinoen.azurewebsites.net" class="btn">Get Started Using Our API</a>
            </div>
        </div>
        <div class="content">
            <h2>Welcome To The Restaurant Management API, ${user.name}</h2>
            <p>
                Our API provides comprehensive features to manage users, orders, drivers, owners,cities,states, menuItems, status, restaurants and so much more.
                Easily integrate and streamline your restaurant operations with our powerful tools.
            </p>
        </div>
        <div class="footer">
            © 2024 RestaurantApi. All rights reserved.
        </div>
    </div>
</body>
</html>
  `;

    // Send welcome email after successful user creation.
    await sendWelcomeEmail(user.email, subject, html);

    return c.json({ msg: "User created successfully" }, 201);
  } catch (error: any) {
    return c.json({ error: error?.message }, 500);
  }
};

export const loginUser = async (c: Context) => {
  try {
    //await the user and convert to json
    const user = await c.req.json();
    // console.log(user) for debugging
    // check if user exists
    const foundUser = await loginAuthService(user);
    // console.log(foundUser);
    if (!foundUser) return c.text("User not found", 404);

    // validate password
    const isValid = await bycrpt.compare(
      user.password,
      foundUser?.password as string
    );
    if (!isValid) {
      return c.json({ error: "Invalid credentials" }, 401); // unauthorized
    } else {
      // create a payload
      let payload = {
        sub: foundUser?.username,
        role: foundUser?.role,
        //session to expire after 3hours
        exp: Math.floor(Date.now() / 1000) + 60 * 180,
      };
      // secret key from env
      let secret = process.env.JWT_SECRET as string;
      const token = await sign(payload, secret); // create a JWT token
      let user = foundUser?.user;
      let role = foundUser?.role;
      return c.json({ token, user: { role, ...user } }, 200); // return token and user details
    }
  } catch (error: any) {
    return c.json({ error: error?.message }, 400);
  }
};
