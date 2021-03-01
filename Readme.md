# Learn MSSQL on daily basis

## 1. Introduction

SQL Server 2019 is enterprise RDBMS from Microsoft. In this repo, we will learn all about SQL Server 2019 and learn to connect, CRUD, and create stored procedures. We will connect using SSMS and NodeJS.
<hr/>

### 1.1 Initial Setup

Install the below packages and software(s).

Software: 
1. [SQL Server 2019](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) <br>
2. IDE: [Visual Studio Code](https://code.visualstudio.com/download)
3. [SSMS for Windows](https://aka.ms/ssmsfullsetup)
4. Optionally, [SQL Server 2019 on Docker](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash)

Note: Enable SA Login for database. [More Info](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/change-server-authentication-mode?view=sql-server-ver15)
<hr/>

### 1.2 Project Setup

Create a project named `learn-mssql` and `npm init` the project. Then install the below package(s).

* MSSQL Package for Connecting to SQL Server 2019
```
npm install mssql
or
yarn install mssql
```

* Dotenv Package for Saving Environment variables
```
npm install dotenv
or
yarn install dotenv
```

<hr/>
