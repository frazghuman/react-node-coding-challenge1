# Node/React Coding Challenge - Battle of Monsters

## Introduction

Welcome to our coding challenge! This challenge has been designed to test your coding skills and problem-solving abilities. We believe that challenges like this are a great way to push yourself and learn new things. The challenge is divided into two sections: the "Coding Challenge" and the "Problem-Solving Challenge.” The "Coding Challenge" will test your technology stack skills, while the "Problem-Solving Challenge" evaluates your ability to solve logic problems and the complexity of your algorithm. The code for both sections is in the same repository. Good luck, and have fun!

## Guidelines

You will create a screen recording video of yourself completing the challenge, then send us a link to the file via Google Drive. A few things to consider:

- We ask that you complete this challenge within the timeframe agreed on in our conversation.
- You can use screen recording software like Loom, QuickTime, or something similar, to create the video.
- As you complete the challenge, please explain what you are doing. Walk us through your thinking, explain your decisions, etc. Show us your UI work, if applicable.
- You cannot use tools such as Copilot, Tabnine, Captain Stack, GPT-Code-Clippy, chatGPT, or similar to simplify or generate code to support the challenge. Doing this will be grounds for automatic disqualification.
- **You MUST NOT edit your video**, stop it and continue later, copy contents from hidden screens, or do anything that could consider cheating.
- The recording of both the “Coding challenge” and “Problem-solving challenge” must be done in one take, without any pauses or editing. **You MUST NOT stop or interrupt the recording at any point**; if you do, you will be disqualified.
- You should record your entire screen so we can validate your implementation correctly. Also, **your computer clock should be visible in the entire video.**
- Here is a short clip from a recent coding challenge as an example of what your recording should look like [Example video](http://www.loom.com/share/85434243d487456b8ef4ae45c3fbc788). It is from a React challenge, but it is the same for any challenge.
- Please upload the video file to Google Drive and share an open link with us (we support .mp4, files smaller/with less than 4 GB).

- The recording should be of the entire coding challenge, from beginning to end, which is about 120 minutes.
    - You will use 95 minutes for the coding challenge and 25 minutes for the problem-solving challenge.
    - You can spend more than 95 minutes on the coding challenge, but we will discount points on your challenge. But be careful with the 25 minutes limit on the problem-solving challenge; you should avoid spending more than the time limit.

## Technologies

This project is built using the Node and React ecosystem libraries; it is good you know the following items to have a good performance:

- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Objection.js](https://vincit.github.io/objection.js/)
- [Knex.js](http://knexjs.org/)
- [Jest](https://jestjs.io/)

- [React](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux-toolkit.js.org/introduction/getting-started)
- [Material UI](https://mui.com/material-ui/getting-started/usage/)
- [Jest Fetch Mock](https://www.npmjs.com/package/jest-fetch-mock)
- [React testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## The Coding Challenge - Backend

The app is a battle of monsters, where we have many different monsters with different stats like attack and defense, for example, and we can let them fight each other.

**Goals**

- Implement missing functionalities: endpoints to list all monsters and start a battle.
- Work on tests marked with `TODO`.
- Ensure the code style check script passes.

**Important Considerations**

- Do NOT modify already created tests. If the code is implemented correctly, these tests should pass without modifications.
- You will face some issues in making the app run, this is part of the challenge, and we expect that you can fix them.

<aside>
⚔️ **Battle Algorithm**

For calculating the battle algorithm,  take into account the flow below:

- The monster with the highest speed makes the first attack, if both speeds are equal, the monster with the higher attack goes first.
- For calculating the damage, subtract the defense from the attack `(attack - defense)`; the difference is the damage; if the attack is equal to or lower than the defense, the damage is 1.
- Subtract the damage from the HP `(HP = HP - damage)`.
- Monsters will battle in turns until one wins; all turns should be calculated in the same request; for that reason, the battle endpoint should return winner data in just one call.
- Who wins the battle is the monster who subtracted the enemy’s HP to zero.
</aside>

### Project **Set Up**

1. Clone repository on your terminal
    
    
    GITHUB-TOKEN: `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`
    
    ```bash
    git clone https://{GITHUB-TOKEN}@github.com/fullstacklabs/assessment-cc-node-react-sr-01.git
    ```
    
    > *Please refrain from using a GUI tool to clone the provided link. Also, ensure not to remove the token from the URL as doing so will prompt git to request a password, and you will not have it.*
    > 
2. Enter to api folder
3. Use nvm to [install](https://github.com/nvm-sh/nvm#usage) and use the Node version on the API project
    
    ```bash
    nvm install x.x.x
    nvm use x.x.x
    ```
    
4. Copy .env.example to .env
    
    ```bash
    cp .env.example .env
    ```
    
5. Install packages
    
    ```bash
    npm install
    ```
    
6. Database migrations and seeds
    
    ```bash
    npm run db:setup
    ```
    

### Acceptance Criteria

1. All monster endpoints were implemented and working correctly.
2. All battle endpoints were implemented and working correctly.
3. Failing old tests should pass.
4. All `TODO` tests were implemented successfully.
5. Test code coverage should be at least 80%, and you must run it and show it to us during the recording.
6. The code style check script must pass on completion of the challenge without any modifications to the config.

## The Coding Challenge - Fronted

The current application displays a list of monsters. We only have the feature of selecting the player's monsters; your job is to implement the missing functionalities.

**Goals**

- Create the monster's card component to visualize the monster's strengths and weaknesses correctly.
- Implement the logic to get the computer's monster which should be randomly selected after the player's monster is selected, not allowing it to be the same one as the player; remember that you will select the player's monster by clicking on it.
- Once both monsters are selected, the user can “Start Battle," and you must implement the service request and display the battle result correctly.

**Important Considerations**

- It is not necessary to create a responsive application for different devices; you can focus only on the web version.

### **API**

To establish a connection with the API, you will need to initiate the project found in the API folder within the same repository. As this is a Full-Stack challenge, it is your responsibility to integrate the frontend with the API, so you will need to check if the endpoints are in the correct response or even if the frontend is calling the endpoints correctly; it is your responsibility to integrate both apps.

The endpoints frontend will need from the API are the following:

- `GET /monsters`: Return all the needed info for the monster's list.
- `POST /battle`: Receive a body and return the battle's result.

### Project **Set Up**

1. Enter to front-end folder
2. Use nvm to [install](https://github.com/nvm-sh/nvm#usage) and use the Node version on the Fronted project
    
    ```bash
    nvm install x.x.x
    nvm use x.x.x
    ```
    
3. Install packages
    
    ```bash
    npm install
    ```
    

### Design

The Battle of Monster app design you need to follow can be found on Figma, to see detailed dimensions and CSS properties you need to:

1. Login or create a [Figma](https://www.figma.com/) account.
2. Open Battle of Monster [Figma Design](https://www.figma.com/file/wXA5toXu2tZJyhXNY5b5zB/Battle-of-Monsters---Front-End).
3. On the right side use the [Inspect Panel](https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel) to see all the details of the component.

> *“Inspect panel” will just show up if you are logged in; that’s why you need to log in or create an account in Figma.*
> 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/89d4320b-15b1-4f1b-96df-7c69cc1db04a/Untitled.png)

### Acceptance Criteria

1. Implementation matches the design.
2. The computer monster is randomly selected after selecting the player monster.
3. The winner's message should be presented after the battle.
4. Tests pass, and coverage has been added to cover the changes and new implementations.

---

## The Problem-Solving Challenge

We have included three challenges in the repository, which you must solve while ensuring that the already created tests pass successfully within the time limit mentioned above.

If, for any reason, you are unable to complete all the challenges, please send us the record of what you were able to accomplish, and we will evaluate it accordingly.

**Important Considerations**

- Use pure TypeScript, and avoid using libraries or anything that is not your code; we want to see you thinking and solving the challenge.
- Challenges can be done in any order.
- Run the tests before stopping recording; if you forget to do so, it will not be taken into account.
- Do NOT USE GOOGLE to solve the reasoning challenges; try to solve them yourself.

### Acceptance Criteria

1. The code should be readable.
2. The code should be easy to maintain.
3. All tests should pass.