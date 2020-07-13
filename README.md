# tekaWebApp

A projekt témája egy videótéka rendszer, melyet a tulaj és a dolgozók egyarán tudnak használni a készletek, a vásárlók és a kölcsönzések nyilvántartására.

A megvalósításhoz használt technikák:
- Angular
- Node.js
- Express
- MongoDB
- Bulma (scss library)

Implementált funkciók:
- bejelentkezés és regisztráció
  + teszt bejelentkezési adatok:  email: test@test.com    psw: helloworld
  + a bejelentkezést követően adott időközönként ellenőrzött hozzáférés, és hozzáférés megújítás
  + ha megvonásra nem kerül az engedély központilag, akkor a rendszer nem tudja az időkorlát lejárta után belépve tartani a felhasználót (biztonsági intézkedés)
  + adatrejtés megoldása
- új elemek rögzítése
  + ellenőrzött bevitel
  + generált elemek (kölcsönzés és határidő rögzítésének automatizálása)
  + a kölcsönzések esetében ez hatással van a médiaelemek elérhetőségi státuszára is (AVALIABLE -> UNAVALIABLE)
- meglévő elemek szerkesztése/törlése
  + a kölcsönzések esetében itt is változik a médiaelemek elérhetőségi státuszára is (UNAVALIABLE -> AVALIABLE)
