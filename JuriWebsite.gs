function buatSheetBaru() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sourceSheet = spreadsheet.getSheetByName("Master");
  
  // Daftar nama-nama untuk sheet baru
  var namaSheetBaru = ["Rename 1","REname 2"];
  
  // Loop untuk membuat salinan dari lembar kerja "Master" dan menamai ulang
  for (var i = 0; i < namaSheetBaru.length; i++) {
    var nama = namaSheetBaru[i];
    var newSheet = sourceSheet.copyTo(spreadsheet);
    newSheet.setName(nama);
  }
}
