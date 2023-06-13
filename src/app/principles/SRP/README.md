# Single responsibility
## 1- What Single Responsibility Principle (SRP) says?
  The idea behind the SRP is that every class, module, or function in a program should have one responsibility/purpose.
  > ***“Every class should have only one reason to change”***
  
  > ***Always “Do not over load the class, Keep it Simple”***

### For Example
#### Bad Way

```cpp
class Customer
{

    void Add(Database db)
    {
        try
        {
            db.Add();
        }
        catch (Exception ex)
        {
            File.WriteAllText(@"C:\Error.txt", ex.ToString());
        }
    }
}
```
#### Good Way
```cpp
class Customer
{
    private FileLogger logger = new FileLogger();
    void Add(Database db)
    {
        try {
            db.Add();
        }
        catch (Exception ex)
        {
            logger.Handle(ex.ToString());
        }
    }
}
class FileLogger
{
    void Handle(string error)
    {
        File.WriteAllText(@"C:\Error.txt", error);
    }
}
```
