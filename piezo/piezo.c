// #include <DHT.h>
#include <Ethernet.h>
#include <SPI.h>

byte mac[] = { 0x00, 0xAA, 0xBB, 0xCC, 0xDE, 0x01 }; // RESERVED MAC ADDRESS
EthernetClient client;

// #define DHTPIN 6 // SENSOR PIN
// #define DHTTYPE DHT11 // SENSOR TYPE - THE ADAFRUIT LIBRARY OFFERS SUPPORT FOR MORE MODELS
// DHT dht(DHTPIN, DHTTYPE);

const int PIEZO_PIN = A0; // Piezo output
long previousMillis = 0;
unsigned long currentMillis = 0;
long interval = 250000; // READING INTERVAL
//
// int t = 0; // TEMPERATURE VAR
// int h = 0; // HUMIDITY VAR
// String data;
int reading = 0; // AC VAR

void setup() {
Serial.begin(9600);

 // pinMode(7, OUTPUT);      // sets the digital pin as output
 // pinMode(5, OUTPUT);      // sets the digital pin as output
 // digitalWrite(7, HIGH);
 // digitalWrite(5, LOW);

if (Ethernet.begin(mac) == 0) {
Serial.println("Failed to configure Ethernet using DHCP");
}

// dht.begin();
delay(10000); // GIVE THE SENSOR SOME TIME TO START

// h = (int) dht.readHumidity();
// t = (int) dht.readTemperature();

data = "";
}

void loop(){



  // Read Piezo ADC value in, and convert it to a voltage
  int piezoADC = analogRead(PIEZO_PIN);
  float piezoV = piezoADC / 1023.0 * 5.0;
  Serial.println(piezoV); // Print the voltage.



  currentMillis = millis();
  if(currentMillis - previousMillis > interval) { // READ ONLY ONCE PER INTERVAL
  previousMillis = currentMillis;
  reading = piezoADC / 1023.0 * 5.0;
  }

  data = "piezoV=";

  data.concat(reading);

if (client.connect("www.xxxxxx.com",8000)) { // REPLACE WITH YOUR SERVER ADDRESS
  client.println("POST /add.php HTTP/1.1");
  client.println("Host: xxxxxx.com"); // SERVER ADDRESS HERE TOO
  client.println("Content-Type: application/x-www-form-urlencoded");
  client.print("Content-Length: ");
  client.println(data.length());
  client.println();
  client.print(data);
}

if (client.connected()) {
  client.stop(); // DISCONNECT FROM THE SERVER
}

// delay(300000); // WAIT FIVE MINUTES BEFORE SENDING AGAIN
}
