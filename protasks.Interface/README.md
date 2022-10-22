In the project directory, you can run:

### `dotnet add package Microsoft.EntityFrameworkCore`
### `dotnet add package Microsoft.EntityFrameworkCore.Tools`
### `dotnet add package Microsoft.EntityFrameworkCore.Desing`
### `dotnet add package Microsoft.EntityFrameworkCore.SqlLite`

Add the dependencies

### `dotnet ef database update`

Run the command to create the database.
if you have any error make sure the dependencies are properly installed.

### `dotnet run`

Runs the app in the development mode.\
 [(http://localhost:5030)/(http://localhost:7161)].
If you want to see the C# test page add this to url `swagger/index.html`.

### `dotnet watch run`

Starts the application and can make changes without restarting the project.