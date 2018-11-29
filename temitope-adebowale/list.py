# Create list comprehension: squares
squares = [str(x) for x in range(0, 9)]
print(squares)

squares = [x for x in range(9)];
print(squares)

squares = [(num1, num2) for num1 in range(0, 2) for num2 in range(2, 4)]
print(squares)

temperatures = [-5, 29, 26, -7, 1, 18, 12, 31]
temperatures_new = [temp for temp in temperatures]
print(temperatures_new)

temperatures = [-5, 29, 26, -7, 1, 18, 12, 31]
temperatures_F = [(9.0/5.0)*temp + 32 for temp in temperatures]
print(temperatures_F)