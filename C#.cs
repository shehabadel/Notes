/*

Type casting is when you assign a value of one data type to another type.

In C#, there are two types of casting:

Implicit Casting (automatically) - converting a smaller type to a larger type size
char -> int -> long -> float -> double

Explicit Casting (manually) - converting a larger type to a smaller size type
double -> float -> long -> int -> char



Properties
You learned from the previous chapter that private variables can only be
accessed within the same class (an outside class has no access to it).
However, sometimes we need to access them - and
it can be done with properties.

A property is like a combination of a variable and a method, and it
has two methods: a get and a set method:

Automatic Properties (Short Hand)
C# also provides a way to use short-hand / 
automatic properties, where you do not have to define
the field for the property, and you only have to write get;
and set; inside the property.

The following example will produce the same result as the example above.
The only difference is that there is less code:


Inherit Multiple Interfaces with the same method name

https://www.c-sharpcorner.com/UploadFile/rohatash/inherit-multiple-interfaces-with-the-same-method-name-in-C-Sharp/



--Pointers--
  Revise
  int  var = 20;    actual variable declaration 
  int  *ip;         pointer variable declaration 

  ip = &var;   store address of var in pointer variable

  printf("Address of var variable: %x\n", &var  );

  address stored in pointer variable 
  printf("Address stored in ip variable: %x\n", ip );

  access the value using the pointer 
  printf("Value of *ip variable: %d\n", *ip );

  return 0;

  char* cptr
  int* iptr



--Attribute--
A declarative tag that is used to convey information to runtime
about the behaviors of various elements like classes, methods, structures
enumerators, assemblies etc. in your program. You can add declarative information
to a program by using an attribute. A declarative tag is depicted
by square ([ ]) brackets placed above the element it is used for.

Attributes are used for adding metadata, such as compiler instruction
and other information such as comments, description, methods
and classes to a program.
The .Net Framework provides two types of attributes:
the pre-defined attributes and custom built attributes.

syntax-->
[attribute(positional_parameters, name_parameter = value, ...)]
element




--Indexers--
An indexer allows an object to be indexed such as an array.
When you define an indexer for a class, this class behaves similar
to a virtual array. You can then access the instance
of this class using the array access operator ([ ]).


class IndexedNames{

  private string[] namelist = new string[size];
  static public int size=10;
  
  public IndexedNames(){
    for(int i=0; i<size; i++)
    {
      namelist[i]="N.A.";
    }
}
public string this[int index]
{

  get{
    string tmp;
    if(index>=0 && index<=size-1)
    {
      tmp=namelist[index];
    }else{
      tmp="";
    }
    return ( tmp );
  }
  set{
    if(index>=0 && index<= size-1)
    {
      namelist[index]=value;
    }
  }

  static void Main(string[] args)
  {
    IndexedNames names = new IndexedNames();
    names[0]="Zara";
    names[1] = "Riz";
    names[2] = "Nuha";
    names[3] = "Asif";
    names[4] = "Davinder";
    names[5] = "Sunil";
    names[6] = "Rubic";
    for ( int i = 0; i < IndexedNames.size; i++ )
    {
      Console.WriteLine(names[i]);
    }
  }


--Overloaded Indexers--

Indexers can be overloaded. Indexers can also be declared with multiple
parameters and each parameter may be a different type.
It is not necessary that the indexes have to be integers.
C# allows indexes to be of other types, for example, a string.



--Delegates--



*/