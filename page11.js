class People 
{
    constructor(name) 
    {
      this.name = name;
    }
    getName() 
    {
      return this.name;
    }
    setName(name) 
    {
      this.name = name;
    }
}
    let person = new People("Jon Snow");
    console.log(person.getName());
    person.setName("Dany");
    console.log(person.getName());