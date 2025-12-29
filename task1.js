const hasilUjianJohn = [75, 80, 79, 90]
const hasilUjianEd = [66, 77, 88, 99]

const gabunganHasilUjian = [...hasilUjianJohn, ...hasilUjianEd]

let nilaiMinimal = gabunganHasilUjian[0];
let nilaiMaksimal = gabunganHasilUjian[0];

for (let i = 0; i < gabunganHasilUjian.length; i++) {
   if (gabunganHasilUjian[i] < nilaiMinimal) {
       nilaiMinimal = gabunganHasilUjian[i];
   }
   if (gabunganHasilUjian[i] > nilaiMaksimal) {
       nilaiMaksimal = gabunganHasilUjian[i];
   }
};

console.log("nilai terendah ujian: " + nilaiMinimal);
console.log("nilai tertinggi ujian: " + nilaiMaksimal);

let totalNilai = 0;
for (let i = 0; i < gabunganHasilUjian.length; i++) {
    totalNilai += gabunganHasilUjian[i];
    };
let rata_rata = totalNilai / gabunganHasilUjian.length;
console.log("rata-rata nilai ujian: " + rata_rata);

