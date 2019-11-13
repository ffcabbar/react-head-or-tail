# Proje Nasıl Çalıştırılır
- Projeyi clone'ladıktan ya da indirdilkten sonra önce projenin bulunduğu klasörde "npm install" konutunu çalıştırarak paketleri yüklememiz gerekiyor.
- Daha sonra "npm run start" komutunu kullanarak uygulamayı başlatabiliriz.

### Yapılacaklar
1. Yapmamız gereken altta statik olarak yazan "Toplam 5 atıştan 3 ü tura 2 si yazı geldi." yazısını dinamik hale getirmek. Yani kaç atış yapıldığını, kaç tanesinin tura geldiğini, kaç tanesinin yazı geldiğini yazdırmamız gerekiyor.
2. Yazı-tura gelme durumunu rastgele hale getirmemiz gerekiyor, şu an göreceğniz üzere sadece tura geliyor.

### İpuçları
1. Butona basıldıkça atış yapıyoruz, dolayısıyla toplam atış sayısını almak için state'de bunun için bir değer tutmalı, buton her tıklandığında bu değeri 1 artırmalıyız.
2. Yazı-tura durumları random yani rastgele olarak belirlenecek. Bunu sağlamak için 0 ve 1 sayıları arasında rastgele seçim yapacak bir fonksiyon yazabiliriz. 0 bizim için turayı, 1 bizim için yazıyı temsil edebilir. Kodu incelediğinizde göreceğiniz, parayı döndürme işleminin olduğu yerde rastgele gelen bu yeni değeri state'e atabiliriz.
