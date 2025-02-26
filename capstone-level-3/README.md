# Bible Prayer Requests

Unfortunately, I was unable to get react.dev working correctly with the project. This project was created using the React framework of Next.js and deployed via Vercel.

With the use of Next.js, webpack and babel is already installed with in the folder node_modules that is  a part of the project folder named capstone-level3-nextjs. No BrowserRoute branch nor file was created as with Next.js version that is not needed because all routes are handled with _app.js which is in the folder named as above as well. With each page located in the src/pages/____ already being a router due to it already being located within that folder. 

Below are details about the project along with how to clone this project with steps for using React/Next.js. Click the below link to see the deployment via vercel.com.

Deployment: ![Bible Prayer, Reading, and Trivia App](https://level3-capstone.vercel.app/)

## About the Project

This project is a continuation of my original capstone project where I had a prayer request page attached. 

This time I am including the same concept with a bit of a difference to include the need for help resources for suicide and addiction prevention linked on the splash page along with provided a bible resource for those requesting prayer pertaining to their request.

Page changes and adding to existing church page design are coming in the future.

[link to Presentation](https://docs.google.com/presentation/d/1o1H3nMvZioeuN2EASWuWfswlLcbsOPWdVMrpA_q9ExU/edit?usp=sharing)
[Link to Canva](https://www.canva.com/design/DAGQU2LsbYI/WXz03sYnQ0VDLeNdx0-N1w/edit?utm_content=DAGQU2LsbYI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
![wireframe](https://res.cloudinary.com/dyzxyc6e9/image/upload/v1726029775/Screenshot_2024-09-10_234119_biiu1x.png)

## Capstone Level 3 Redesign
With the changes I have broken down my function into modules, controllers, and utils with a redesign of the prayer request message to the user to address them one of two ways based upon if the keywords set were triggered in the user's request statement. 

Below are the examples of what was added to the getBibleVerse.js in that function:

        if (verseFound) {
            messageContainer.innerHTML = `
                Hi ${userName}! We want to thank you for your prayer request, someone will reach out to you shortly. According to your request, please see the Bible verse below for your reading.
            `;
        } else {
            messageContainer.innerHTML = `
                Thank you for your request! Someone will reach out to you within 48 hours.
            `;
        }

Based upon the user input, one of these statements are presented to the user upon submission of their request.

Redesign for use with react next.js is setup and deployed via vercel (see link above). Below is how to setup the project on your local machine:

# Launch Next.js Steps

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
