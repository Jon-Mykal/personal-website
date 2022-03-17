<template>
  <section class="home">
    <Hero pageTitle="Developer + Designer" />
    <section class="bio-overview">
      <h3 class="pt-5">A Little About Me</h3>
      <section class="row">
        <section class="col-6"></section>
              <section class="col-6"></section>
      </section>
    </section>
    <section class="skillsets">
      <h3 class="pt-5">What Can I Do?</h3>
      <section class="row">
        <section class="col-6">
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
        </section>
        <section class="col-6"></section>
      </section>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';
// import '../node_modules/@syncfusion/ej2-pdfviewer/styles/fabric.css';
// import pdf from '../assets/Test.pdf'
import {ref} from 'vue';
export default {
  name: 'HomeView',
  components: {

  },
  setup() {
    const serviceUrl = ref("https://ej2services.syncfusion.com/production/web-services/api/pdfviewer");
    const documentPath = ref("/docs/Test.pdf");
    // console.log(require('../assets/Test.pdf'));
    const pdfviewer = new PdfViewer({ serviceUrl: "../assets"});
    // pdfviewer.appendTo("#pdfViewer");
    
    const loadPdf = () => {
      pdfviewer.appendTo("#pdfViewer");
      // let viewer = document.getElementById('pdfViewer').ej2_instances[0];
    
      pdfviewer.load("Test.pdf", null);
    }

    return { serviceUrl, documentPath, loadPdf};
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  }
}
</script>

<style>
.bio-overview,
.skillsets {
height: 25rem;
}

.bio-overview {
  background: #dadada;
}

.skillsets {
  background: #afafaf;
}

	#pdfViewer {
		height: 640px;
	}
</style>
