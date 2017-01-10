<script type="text/javascript">
	$(document).ready(function(){
		
		var sayfaBasiResimSayisi = 8; // bir sayfada olmasını istediğimiz sayfa sayısı
		
		var toplamResim = $("div.thumbnail").length; // galeride bulunan toplam resim sayısı
		
		$("div.thumbnail").slice(sayfaBasiResimSayisi).hide(); // 8 resimden fazlasını ilk başta gösterme
		
		var sayfaSayisi = Math.ceil(toplamResim/sayfaBasiResimSayisi); //toplam sayfa sayısını hesapla
		
		var baslangic = 0;
		var bitis = sayfaBasiResimSayisi;

		for(i=1; i<=sayfaSayisi; i++){
			//$("ul.pagination").before('<li><a href="#">'+ i +'</a></li>');
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

		$("li.before").click(function(){

			if(baslangic > 0)
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

		$("li.after").click(function(){
			
			
			
			if(bitis <= toplamResim)
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