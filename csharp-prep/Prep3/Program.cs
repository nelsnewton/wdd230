using System;

class Program
{
    static void Main(string[] args)
    {
        //before the sample

        //Console.Write("What is the margic number? ");
        //int margic =  int.Parse(Console.ReadLine());
        //users input
        //Console.Write("What is your gues? ")
        //int guess = int.Parse(Console.ReadLine());

        //if (guess > margic)
       // {
           // Console.Write("Higher");
        //}
        //else if (gues < margic)
       // {
           // Console.Write("Lower");
        //}
        //else
       // {
         //   Console.Write("You guessed it");
       // }
        {
            
        Console.WriteLine("Hello,Welcome to Prep3 World!");
        //generating a random number from the computer system
        Random randomGenerator = new Random();
        int magicNumber = randomGenerator.Next(1, 101);

        int guess = -1;

        //Also we can use a di-while loop here
        while (guess != magicNumber )
        {
            Console.Write("What is is your guess? ");
            guess = int.Parse(Console.ReadLine());
        }
        if (guess > magicNumber)
        {
            Console.Write("Higher");
        }

        else if (guess < magicNumber)
        {
            Console.Write("Lower");
        }
        else
        {
            Console.Write("congrajulations you guessed it!");
        }


        }
    }
}