# node-email-gpt

This sample repo will show you how to easily to get started with the Nylas Node.js SDK to create vector embeddings emails for augmenting Generative AI completions models. Think of ChatGPT for Emails, so EmailGPT.

## Setup

### System dependencies

- Node.js v16.x

### Gather environment variables

You'll need the following values:

```text
CLIENT_ID=CLIENT_ID
CLIENT_SECRET=CLIENT_SECRET
API_SERVER=API_SERVER
ACCESS_TOKEN=ACCESS_TOKEN
RECIPIENT_ADDRESS=RECIPIENT_ADDRESS
OPEN_AI_API_KEY=OPEN_AI_API_KEY
PINECONE_API_KEY=PINECONE_API_KEY
```

Add the above values to a `.env` file:

### Install dependencies

```bash
$ npm i
```

## Usage

Run the script using following commands:

```bash
$ npm run build
$ node build/index.js
```

When you run the script, you'll get account information output in your terminal:

```bash
# ...
# ...logging all function outputs
# ...
Question: Did Blag email me about a meeting?

Answer: No, Blag did not email you about a meeting. They emailed you resources that might be helpful for topics related to connecting to user accounts, sending and receiving emails, contextual email clients, calendar availability and integration in applications.
```

## Learn more

Visit our [Nylas Node.js SDK documentation](https://developer.nylas.com/docs/developer-tools/sdk/node-sdk/) to learn more.
