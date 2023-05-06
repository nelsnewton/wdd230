using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, welcome to Prep5 World!");

        DisplayWelcomeMessage();

        string userName = PromptUserName();
        int userNumber = PromptUserNumber();

        int squaredNumber = squaredNumber(userNumber);

        DisplayResult(userName, squaredNumber);
    }

    //calling for the welcome note
    static void DisplayWelcomeMessage()
    {
        Console.WriteLine("Welcome to the program!");
    }

    //calling for the user`s Name
    static string PromptUserName()
    {
        Console.WriteLine("Please enter your name: ");
        string name = Console.ReadLine();

        return name;
    }

    //calling for the user`s number
    static int PromptUserNumber()
    {
      Console.Write("Please enter your favourite Number: "):
      int number = int.Parse(Console.ReadLine());

      return number;  
    }

    //calling for the square number
    static int squareNumber(int number)
    {
        int number = number * number;
        return square;
    }

    static void DisplayResult(string name, int square)
    {
        Console.WriteLine($"{name}, the square of your number is {square}");
    }   
}