// Run in Arduino IDE

#include <Time.h>
#include <TimeLib.h>

const int PIEZO_PIN = A0; // Piezo output

void setup() {
  Serial.begin(9600);
}

void loop() {
//  time_t t = now();
  // Read Piezo ADC value in, and convert it to a voltage
  int piezoADC = analogRead(PIEZO_PIN);
//  float piezoV = piezoADC / 1023.0 * 5.0;
//  Serial.println(piezoV); // Print the voltage.
  char str[5];
  sprintf(str, "%d", piezoADC);

  Serial.println(piezoADC); // Print the voltage.
//  delay(100);
}
