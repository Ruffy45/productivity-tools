import { Account, Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('655dd79be18f0f7bbb03');

export const account = new Account(client);

export const databases = new Databases(client);
