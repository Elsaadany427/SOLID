# Liskov Substitution Principle LSP

## 1- What Liskov Substitution Principle says?

> **_If you have class B inheret from class A then class A should be replacable by class B without any changes._**
> ![LSP](https://miro.medium.com/v2/resize:fit:2000/format:webp/1*yKk2XKJaCLNlDxQMx1r55Q.png);

When a child Class cannot perform the same actions as its parent Class, this can cause bugs.

If you have a Class and create another Class from it, it becomes a parent and the new Class becomes a child. The child Class should be able to do everything the parent Class can do. This process is called Inheritance.

The child Class should be able to process the same requests and deliver the same result as the parent Class or it could deliver a result that is of the same type.

The picture shows that the parent Class delivers Coffee(it could be any type of coffee). It is acceptable for the child Class to deliver Cappucino because it is a specific type of Coffee, but it is NOT acceptable to deliver Water.

If the child Class doesn’t meet these requirements, it means the child Class is changed completely and violates this principle.

### For example

#### (1) Bad Practice. Casting

```java
public class Product {

     protected double discount = 20;

     public double getDiscount() {
         return discount;
     }

}

public class InHouseProduct extends Product {

     public void applyExtraDiscount() {
         discount = discount * 1.5; // multiplies 1.5 times
     }

}public class PrincingUtils {

     public static void main(String[] args) {

        Product p1 = new Product();
        Product p2 = new Product();
        Product p3 = new InHouseProduct();

        List<Product> productList = new ArrayList<>();

        productList.add(p1);
        productList.add(p2);
        productList.add(p3);

	for(Product product : productList) {
	    if (product instanceof InHouseProduct) {
            // Type casting
            // Not Correct Way
            ((InHouseProdcut) product).applyExtraDiscount();
	    }

        System.out.println(product.getDiscount());	 }
    }

}
```

According to LSP, this code breaks the rule. Because “Objects should be replaceable with their subtypes without affecting the correctness of the program.”

The code is asking or enquiring about the subtype, from INSIDE the Utils class.

```java
public class Product {

     protected double discount = 20;

     public double getDiscount() {
	 return discount;
     }

}

public class InHouseProduct extends Product {

     @Override
     public double getDiscount() {
	    is.applyExtraDiscount();
	 return discount;
     }

     public void applyExtraDiscount() {
	    discount = discount * 1.5; // multiplies 1.5 times
     }

}
public class PricingUtils {

     public static void main(String[] args) {

        Product p1 = new Product();
        Product p2 = new Product();
        Product p3 = new InHouseProduct();

        List<Product> productList = new ArrayList<>();

        productList.add(p1);
        productList.add(p2);
        productList.add(p3);

        for(Product product : productList) {
            System.out.println(product.getDiscount());
        }

     }

}
```
