import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6732049200211607b168");

export const account = new Account(client);

//Database

export const databases = new Databases(client, "673204df000a5683bcf9");
