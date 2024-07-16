Technologies:    .NET Core 8 , React (Node, npm) , SQL Server
Tools:    SQL Server Management Studio ,  Visual Studio Code , Visual Studio

For the React Project:
  Here are the commands:
            npm create vite@latest react-for-todolist   # React, JavaScript
            cd react-for-todolist
            npm install axios
            npm install react-router-dom
            npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
            
For the Backend Project:
  Create a project with .NET Core 8:
        In the menu, go to "Manage NuGet Packages" and install:
                    Microsoft.EntityFrameworkCore
                    Microsoft.EntityFrameworkCore.SqlServer
                    Microsoft.EntityFrameworkCore.Tools
                    
In the  appsettings.json file, under ConnectionStrings, change the server name according to the connection you established in SQL Server Management Studio.
        Commands in the Package Manager Console:
            pm> Add-Migration 
            pm> Update-Database


    
    
