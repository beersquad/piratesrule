#include <Ethernet.h>
#include <SPI.h>

byte mac[] = { 0x90, 0xA2, 0xDA, 0x0F, 0x2A, 0x8D };
byte ip[] = { 192, 168, 2, 77 };
byte gw[] = {192,168,2,1};
byte subnet[] = { 255, 255, 255, 0 };

byte server[] = { 192, 168, 2, 83  }; // Server IP

int data = 1022;

void setup()
{

Serial.begin(9600);               // Used for serial debugging

}
void loop()
{

Serial.println("Program running...");

 delay(5000);
 senddata();                                 // Data is sent every 5 seconds

}
void senddata()
{
Ethernet.begin(mac, ip, gw, subnet);
EthernetClient client;//(server, 80);
Serial.println();
Serial.println("ATE :)");
delay(1000);                                    //Keeps the connection from freezing

if (client.connect(server, 80)) {
Serial.println("Connected");
client.print("GET /insertdata.php?data=");
client.print(data);
client.println(" HTTP/1.1");
client.println("Host: 192.168.2.83");
client.println();
Serial.println();
                      }

else
{
Serial.println("Connection unsuccesful");
}
//}
 //stop client
 client.stop();
 while(client.status() != 0)
{
  delay(5);
}
}
