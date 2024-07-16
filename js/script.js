function calculateBMI() {
  // Ambil nilai dari input
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;

  // Validasi input
  if (weight === '' || height === '') {
      alert('Silakan masukkan berat dan tinggi badan.');
      return;
  }

  // Hitung BMI
  var bmi = weight / (height * height);
  var result = '';

  // Tentukan kategori BMI
  if (bmi < 18.5) {
      result = 'Kekurangan berat badan';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      result = 'Normal (ideal)';
  } else if (bmi >= 25 && bmi <= 29.9) {
      result = 'Kelebihan berat badan';
  } else {
      result = 'Obesitas';
  }

  // Tampilkan hasil
  document.getElementById('result').innerText = `BMI Anda adalah ${bmi.toFixed(2)} (${result})`;
}