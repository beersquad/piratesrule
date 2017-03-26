// To run this please install Processing = https://processing.org

// This library is called "HTTP Requests for Processing"
import http.requests.*; // This library is not installed by default, MAKE SURE TO ADD!!!
import processing.serial.*;

Serial myPort; // Create object from Serial class
String val; // Data received from the serial port
PostRequest post = new PostRequest("http://localhost:8000");

void setup() {
  String portName = Serial.list()[3];
  myPort = new Serial(this, portName, 9600);
}

void draw() {
  if (myPort.available() > 0) {
    val = myPort.readStringUntil('\n');
  }
  println(val);
  post.addData("piezoADC", val);
  //post.addHeader("Content-Type", "application/json");
  post.send();
  println("Reponse Content: " + post.getContent());
  println("Reponse Content-Length Header: " + post.getHeader("Content-Length"));
  delay(2000);
}
