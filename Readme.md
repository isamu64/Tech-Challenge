# Tech Challenge
***

## Front

First we download the React model using during my bootcamp and we install it with this 2 lines.
`cp -n ../React-modele/{.*,*} . `

`cp -rn ../React-modele/{src,config,public} .`


Install dependencies
`yarn`

Start the server
`yarn start` : http://localhost:8080


***

## Back

Initialize the project :
`npm init -y`

Install all dependencies 
`npm install express pg dotenv`
***

## Database

1.Connect with user postgres
`sudo -i -u postgres`

2.Connect to postgres
`psql`

3.Create a user with a password to use the database
`CREATE USER argo WITH PASSWORD 'argo';`

4.Create the database
`CREATE DATABASE members OWNER 'argo';`

5.Insert the content of members.sql into the database

In a new terminal:
`psql -U argo -d members -f Back/data/members.sql`






