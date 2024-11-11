import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("6730be9b0023c1304434");

export const account = new Account(client);

//Database

export const databases = new Databases(client, "6730c022000fe0dcca18");