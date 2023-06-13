# Open — closed principle
## 1- What Open-Closed principle says?
> ***The open–closed principle (OCP) states “software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification” that is, such an entity can allow its behavior to be extended without modifying***

Let us think of a real world object “Mixer Grinder” ha ha.., It is Open for extension — new mixer jars can be attached anytime to prepare food/drinks. Think 🤔!! Are we doing any changes inside the Mixer Grinder to fix the attachments? No, the Mixer grinder object is Closed for modification, But It is designed to extend its functionality by allowing way to the fit the new mixer jars. Clear !!!

### For example
```java
public class Circle {
    private double radius;
}
```
```java
public class Rectangle {

    private double length;
    private double width;    

}
```
Let’s look at the class AreaCalculator that violates the OCP, The AreaCalculator class has methods to calculate area for a rectangle and for a circle. Let say If we need extend the functionality to calculate area for an another object then AreaCalculator class needs to be modified, Here we are violating the principle of OCP.
```java
public class AreaCalculator {

    public double calculateAreaRectangle(Rectangle rectangle){
        return rectangle.getLength() * rectangle.getLength();
    }

    public double calculateAreaCircle(Circle circle){
        return 3.14 * circle.getRadius() * circle.getRadius();
    }

}
```
### **How to fix the violation using Open Close Principle**

The primary mechanisms behind the Open/Closed Principle are abstraction and polymorphism.

Now Let us create a common Interface called Shape, and its subclasses as Circle and Rectangle, Circle and Rectangle classes implements its own calculateArea() methods to calculate the areas of the objects specific to their instance types.
```java
public interface Shape {
    double calculateArea();
}
```
```java
public class Rectangle implements Shape{

    private double length;
    private double width;

    @Override
    public double calculateArea() {
        return length * width;
    }
}
```
```java
public class Circle implements Shape {

    double radius;

    @Override
    public double calculateArea() {
        return 3.14 * radius * radius;
    }
}
```
```java
public class AreaCalculator {

    private Shape shape;

    public double calculateArea() {
        return this.shape.calculateArea();
    }

}
```
Now if you see the AreaCalculator class, it is not having any implementation which is specific objects like Circle,Rectangle. It is having a interface reference to have an object. Specific objects like Circle, Rectangle will be injected dynamically in the AreaCalculator class.

Hence no need of modifying the source code of AreaCalculator to extend the functionality for another object like Triangle.