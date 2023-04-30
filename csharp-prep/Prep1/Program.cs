using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("What is your first name? ");
        Console.Write("What is your last name? ");

        string first = Console.ReadLine();
        string last = Console.ReadLine();

        Console.WriteLine($"Hello {first}, this is your output");
        Console.WriteLine($"Your name is {last}, {first} {last}");
    }
}
