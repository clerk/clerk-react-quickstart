<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/light-logo.png">
      <img alt="Clerk Logo for light background" src="./public/dark-logo.png" height="64">
    </picture>
  </a>
  <br />
</p>
<div align="center">
  <h1>
    Clerk and React Quickstart
  </h1>
  <a href="https://www.npmjs.com/package/@clerk/clerk-react">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/@clerk/clerk-react" />
  </a>
  <a href="https://discord.com/invite/b5rXHjAg7A">
    <img alt="Discord" src="https://img.shields.io/discord/856971667393609759?color=7389D8&label&logo=discord&logoColor=ffffff" />
  </a>
  <a href="https://twitter.com/clerkdev">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40clerkdev&style=social&url=https%3A%2F%2Ftwitter.com%2Fclerkdev" />
  </a>
  <br />
  <br />
  <img alt="Clerk Hero Image" src="./public/hero.png">
</div>

## Introduction

Clerk is a developer-first authentication and user management solution. It provides pre-built React components and hooks for sign-in, sign-up, user profile, and organization management. Clerk is designed to be easy to use and customize, and can be dropped into any React application.

After following the [Clerk React quickstart](https://clerk.com/docs/quickstarts/react), you will have learned how to:

- Create a new React application using Vite
- Install `@clerk/clerk-react`
- Set up your environment keys
- Import the Clerk Publishable Key
- Wrap your React app in `<ClerkProvider />`
- Create a header with Clerk components

### Branches of this repository

- `main`: The result of following the [Clerk React quickstart](https://clerk.com/docs/quickstarts/react).
- `integrate-react-router-dom-using-data-router`: A demo of how to add React Router to your React + Clerk application using React Router in [data mode](https://reactrouter.com/start/modes#data).

## Deploy

Easily deploy the template to Vercel with the button below. You will need to set the required environment variables in the Vercel dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclerk%2Fclerk-react-quickstart&env=VITE_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY&envDescription=Clerk%20API%20keys&envLink=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%2Freact&redirect-url=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%2Freact)

## Running the template

```bash
git clone https://github.com/clerk/clerk-react-quickstart
```

To run the example locally, you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-react-quickstart).

2. Go to the [Clerk dashboard](https://dashboard.clerk.com?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-react-quickstart) and create an application.

3. Set the required Clerk environment variables as shown in [the example `env` file](./.env.sample).

4. `npm install` the required dependencies.

5. `npm run dev` to launch the development server.

## Learn more

To learn more about Clerk and React, check out the following resources:

- [Quickstart: Get started with React and Clerk](https://clerk.com/docs/quickstarts/react?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-react-quickstart)

- [Clerk Documentation](https://clerk.com/docs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-react-quickstart)
- [Vite Documentation](https://vitejs.dev/guide/)

## Found an issue or want to leave feedback

Feel free to create a support thread on our [Discord](https://clerk.com/discord). Our support team will be happy to assist you in the `#support` channel.

## Connect with us

You can discuss ideas, ask questions, and meet others from the community in our [Discord](https://discord.com/invite/b5rXHjAg7A).

If you prefer, you can also find support through our [Twitter](https://twitter.com/ClerkDev), or you can [email](mailto:support@clerk.dev) us!
