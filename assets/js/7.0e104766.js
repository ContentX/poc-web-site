(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{452:function(e,a,t){"use strict";t.r(a);var s=t(26),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"why-every-java-developer-should-know-how-to-use-reflection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-every-java-developer-should-know-how-to-use-reflection"}},[e._v("#")]),e._v(" Why Every Java Developer Should Know How to Use Reflection ?")]),e._v(" "),t("p",[e._v("Reflection is a powerful feature of the Java programming language that allows developers to inspect and manipulate the internal properties and behaviors of objects at runtime. While it is not always necessary to use reflection in Java programming, mastering this skill can greatly enhance a developer's ability to write flexible, reusable code.")]),e._v(" "),t("p",[e._v('First, let\'s take a closer look at what reflection is and how it works. Reflection provides a way to inspect the properties and methods of an object at runtime, rather than at compile time. This means that a Java program can look "into" itself to see the internal details of its objects and classes.')]),e._v(" "),t("p",[e._v("To illustrate this, let's consider an example where we want to check the value of a private variable in a class, but we don't want to modify the class definition. With reflection, we can do this by creating an instance of the class, getting a reference to the private field using its name, and then using the "),t("code",[e._v("get()")]),e._v(" method to retrieve its value. Here's how it might look in code:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class MyClass {\n    private int myPrivateValue = 42;\n}\n\npublic class Main {\n    public static void main(String[] args) throws IllegalAccessException, NoSuchFieldException {\n        MyClass myObject = new MyClass();\n        Field privateField = MyClass.class.getDeclaredField(\\"myPrivateValue\\");\n        privateField.setAccessible(true);\n        int value = (int) privateField.get(myObject);\n        System.out.println(\\"The private variable has a value of \\" + value);\n        // Output: The private variable has a value of 42\n    }\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br")])]),t("p",[e._v("In this example, we create an instance of "),t("code",[e._v("MyClass")]),e._v(" and then use reflection to get a reference to the private field "),t("code",[e._v("myPrivateValue")]),e._v(". We set the field to be accessible (since it is private) and then get its value using the "),t("code",[e._v("get()")]),e._v(" method. Finally, we print the value of the private variable to the console.")]),e._v(" "),t("p",[e._v("Another use case for reflection is dynamically creating objects and invoking their methods. For example, suppose we have a class called "),t("code",[e._v("Calculator")]),e._v(" with an "),t("code",[e._v("add")]),e._v(" method:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("We can create an instance of "),t("code",[e._v("Calculator")]),e._v(" using reflection, and then invoke its "),t("code",[e._v("add")]),e._v(" method with different arguments at runtime. Here's how it might look in code:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('public class Main {\n    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, InvocationTargetException, IllegalAccessException, InstantiationException {\n        Class calculatorClass = Class.forName(\\"Calculator\\");\n        Calculator calculator = (Calculator) calculatorClass.newInstance();\n        Method addMethod = calculatorClass.getDeclaredMethod(\\"add\\", int.class, int.class);\n        int result = (int) addMethod.invoke(calculator, 2, 3);\n        System.out.println(\\"The result of 2 + 3 is \\" + result);\n        // Output: The result of 2 + 3 is 5\n    }\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("p",[e._v("In this example, we use reflection to retrieve the "),t("code",[e._v("Calculator")]),e._v(" class by its name, create an instance of it using "),t("code",[e._v("newInstance()")]),e._v(", and then get a reference to the "),t("code",[e._v("add")]),e._v(" method using "),t("code",[e._v("getDeclaredMethod()")]),e._v(". We then invoke the "),t("code",[e._v("add")]),e._v(" method on the "),t("code",[e._v("calculator")]),e._v(" instance with arguments "),t("code",[e._v("2")]),e._v(" and "),t("code",[e._v("3")]),e._v(". Finally, we print the result to the console.")]),e._v(" "),t("p",[e._v("In conclusion, mastering reflection is an important skill for any Java developer who wants to write flexible and reusable code. It allows us to inspect and manipulate the internal details of objects at runtime, which can be useful in a variety of situations. While reflection may take some extra effort to learn and use properly, it can greatly enhance the power and flexibility of our Java programs")])])}),[],!1,null,null,null);a.default=n.exports}}]);