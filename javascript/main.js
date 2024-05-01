async function translate(mesaj) {
    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '7d72bf6b26msh090d0995e053c0fp1b07fajsn021bb7a53a76',
        'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
      },
      body: new URLSearchParams({
        from: 'tr',
        to: 'en',
        text: `${mesaj}`
      })
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result.trans; // Çeviri metnini döndür
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementsByClassName("scroll-hide svelte-1f354aw")[0].addEventListener("keypress", async function(event) {
        if (event.key === "Enter") {
          event.preventDefault(); 
          var textarea = event.target;
          var mesaj = textarea.value.trim(); 
          if (mesaj !== "") { 
            // Mesajı çevir ve textarea'ya yaz
            const translatedMessage = await translate(mesaj);
            if (translatedMessage !== null) {
              textarea.value = translatedMessage;
            } else {
              textarea.value = "Çeviri yapılamadı.";
            }
          }
        }
      });
    }, 30000); 
  });
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementsByClassName("scroll-hide svelte-1f354aw")[1].addEventListener("keypress", async function(event) {
        if (event.key === "Enter") {
          event.preventDefault(); 
          var textarea = event.target;
          var mesaj = textarea.value.trim(); 
          if (mesaj !== "") { 
            // Mesajı çevir ve textarea'ya yaz
            const translatedMessage = await translate(mesaj);
            if (translatedMessage !== null) {
              textarea.value = translatedMessage;
            } else {
              textarea.value = "Çeviri yapılamadı.";
            }
          }
        }
      });
    }, 30000); 
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      // "scroll-hide" ve "svelte-1f354aw" sınıflarına sahip olan öğeyi seç
      const textarea = document.getElementsByClassName("scroll-hide svelte-1f354aw")[0];
      
      // Butona tıklama olayına event listener ekle
      document.getElementsByClassName("svelte-kqij2n")[0].addEventListener('click', function() {
        // Seçilen öğeye event listener ekle
        textarea.addEventListener('keypress', async function(event) {
          if (event.key === "Enter") {
            event.preventDefault(); 
            var mesaj = textarea.value.trim(); 
            if (mesaj !== "") { 
              // Mesajı çevir ve textarea'ya yaz
              const translatedMessage = await translate(mesaj);
              if (translatedMessage !== null) {
                textarea.value = translatedMessage;
              } else {
                textarea.value = "Çeviri yapılamadı.";
              }
            }
          }
        });
      });
    }, 30000); // 30 saniye bekleme süresi
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      // "scroll-hide" ve "svelte-1f354aw" sınıflarına sahip olan öğeyi seç
      const textarea = document.getElementsByClassName("scroll-hide svelte-1f354aw")[1];
      
      // Butona tıklama olayına event listener ekle
      document.getElementsByClassName("svelte-kqij2n")[1].addEventListener('click', function() {
        // Seçilen öğeye event listener ekle
        textarea.addEventListener('keypress', async function(event) {
          if (event.key === "Enter") {
            event.preventDefault(); 
            var mesaj = textarea.value.trim(); 
            if (mesaj !== "") { 
              // Mesajı çevir ve textarea'ya yaz
              const translatedMessage = await translate(mesaj);
              if (translatedMessage !== null) {
                textarea.value = translatedMessage;
              } else {
                textarea.value = "Çeviri yapılamadı.";
              }
            }
          }
        });
      });
    }, 30000); // 30 saniye bekleme süresi
  });
  
  