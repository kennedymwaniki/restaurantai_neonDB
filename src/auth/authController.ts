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
    // console.log(user); for debugging
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
          /* Inline CSS for basic styling */
          .email-container {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 5px;
          }
          .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 3px;
            transition: background-color 0.3s ease;
          }
          .btn:hover {
            background-color: #0056b3;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <p>Hello, ${user.username}</p>
          <p>Thank you for registering with our Restaurant Management System!</p>
          <p>Welcome to our system!</p>
          <p>We help you manage your restaurant.</p>

          <img src="https://wallpapercave.com/wp/wp2038248.jpg" alt="Image" style="max-width: 100%; height: auto;">
          <a class="btn" href="restaurantapinoen.azurewebsites.net">Visit our Website</a>
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
    console.log(foundUser);
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
