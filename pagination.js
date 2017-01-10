<script type="text/javascript">
	$(document).ready(function(){
		
		var sayfaBasiResimSayisi = 8; // bir sayfada olmasını istediğimiz sayfa sayısı
		
		var toplamResim = $("div.thumbnail").length; // galeride bulunan toplam resim sayısı
		
		$("div.thumbnail").slice(sayfaBasiResimSayisi).hide(); // 8 resimden fazlasını ilk başta gösterme
		
		var sayfaSayisi = Math.ceil(toplamResim/sayfaBasiResimSayisi); //toplam sayfa sayısını hesapla
		
		var baslangic = 0;
		var bitis = sayfaBasiResimSayisi;

		for(i=1; i<=sayfaSayisi; i++){
			//burada sayfa numaralarını yazdırıyoruz - we print the page numbers below the page
			$('<li id="single-image"><a href="javascript:void(0)">'+ i +'</a></li>').insertBefore("li.after");
		}

		$("li#single-image").on("click",function(){
			
			var currentIndex = $(this).index();
			baslangic = ((currentIndex-1) * sayfaBasiResimSayisi);
			bitis = currentIndex * sayfaBasiResimSayisi;
			$("div.thumbnail").hide();
			for(i=baslangic; i<bitis; i++){
				
				$("div.thumbnail:eq("+i+")").show();
			}

		});	
		//Sol yön butonuna basıldığında -- when click the left arrow button
		$("li.before").click(function(){

			if(baslangic > 0) //Gösterilecek resim denetimi yapıyoruz - prevent the exceed negative image number
			{
				$("div.thumbnail").hide();
				for(i=baslangic-sayfaBasiResimSayisi; i<bitis-sayfaBasiResimSayisi; i++){
					
					$("div.thumbnail:eq("+i+")").show();
				}
				baslangic=baslangic-sayfaBasiResimSayisi;
				bitis = bitis-sayfaBasiResimSayisi;
			}
			else{
				alert("Başka resim yok");
			}
			
		});
		//Sağ yön butonuna basıldığında -- when click the right arrow button
		$("li.after").click(function(){
			
			if(bitis <= toplamResim) //Gösterilecek resim denetimi yapıyoruz - prevent the exceed total image number
			{
				$("div.thumbnail").hide();
				for(i=baslangic+sayfaBasiResimSayisi; i < bitis + sayfaBasiResimSayisi; i++){
					
					$("div.thumbnail:eq("+i+")").show();
				}
				baslangic=baslangic+sayfaBasiResimSayisi;
				bitis = bitis+sayfaBasiResimSayisi;
			}
			else{
				alert("Baska resim yok");
			}

		});	
	
	});
</script>
