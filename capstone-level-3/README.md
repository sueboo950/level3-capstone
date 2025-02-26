# Bible Prayer Requests

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