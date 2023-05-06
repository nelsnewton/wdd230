using System;
using System.Collections.Generics;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, Welcome to Prep4 World!");

        List<int> numbers = new List<int>();

        int userNumber = -1;

        //Usig the do-while loop
        while (userNumber != 0)
        {
            Console.Write("Enter your Number (0 to quite): ");
            string userResponse = Console.ReadLine();
            userNumber = int.Parse(userResponse);

            //Storing users number to the list
            if (userNumber != 0)
            {
                numbers.Add(userNumber);
            }
        }
       //computing the sum
       int sum = 0;
       foreach(int number in numbers)
       {
        sum += number;
       }
       Console.Write($"The sum of numbers os: {sum}");

       //computing the average
       //the sum is changed to a float incase of a decimal answer to be displayed
       float average = ((float)sum) / numbers.count;
       Console.Write($"The average of numbers is: {average}"); 

       //computing the max number of numbers
       int max = numbers[0];
       foreach (int number in numbers)
       {
        if (number > max)
        {
            max = number;
        }
       }
       Console.Write($"The max number is: {max}");


            
    }
}.





























































































