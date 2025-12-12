let tombol_cek = document.getElementById('tombol');
        let data_history = [];
        let total = 0;

        // Fungsi
        function perhitungan() {
            let data_input = Number(document.getElementById('angka').value);
            let output = document.getElementById('output');
            
            // Tambah ke history
            data_history.push(data_input);
            total += data_input;

            // Tampilkan hasil
            output.innerHTML = '';
            
            for (let i = 0; i < data_history.length; i++) {
                output.innerHTML += `Masukkan Angka ke-${i+1} : ${data_history[i]}<br>`;
            }

            // Kondisi
            if (total >= 100) {
                output.innerHTML += `<br>Total: ${total}`;
                tombol_cek.disabled = true;
            }

            document.getElementById('angka').value = '';
        }

        tombol_cek.addEventListener('click', perhitungan);