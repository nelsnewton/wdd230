using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello Welcome to Prep2 World!");

        Console.Write("What is your grade percentage? ");
        string userAnswer = Console.ReadLine();
        int percentage = int.parse(userAnswer);

        string letter = "";

        if (percentage >= 90)
        {
            letter = "A";
        }
        else if (percentage >= 80)
        {
            letter = "B";
        }
        else if (percentage >= 70)
        {
            letter = "C";
        }
        else if (percentage >= 60)
        {
            letter = "D";
        }
       else
       {
        letter = "F";
       }

       Console.WriteLine($"Your grade is: {letter}");

       if (percentage >= 70)
       {
        Console.WriteLine("You have passed");
       }
       else if (percentage >= 55)
       {
        Console.WriteLine("Good trial, more effort needed");
       }
       else 
       {
        Console.WriteLine("Aim higher, next time better.");
       }

    }
}