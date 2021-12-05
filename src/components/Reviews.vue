<template>
  <h3>Reviews</h3>
  <div class="reviews-container">
    <ul v-if="filteredReviews[0]" class="collapsible popout">
      <li v-for="review in filteredReviews" :review="review" :key="review.id">
        <div class="collapsible-header hoverable">
          <div class="avatar">
            <img :src="avatar(review)" />
          </div><span class="review-author">{{review.author}}</span>
        </div>
        <div class="collapsible-body"><span v-html="parseMarkdown(review.content)"></span></div>
      </li>
    </ul>
    <div v-else class="no-reviews">
      <p>No reviews yet.</p>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  props: {
    reviews: Array,
  },
  setup() {
    onMounted(() => {
      function scrollTo(e) {
        window.scrollTo({
          top: e.offsetTop - 20,
        });
      }
      const elems = document.querySelectorAll('.collapsible');
      let interval;
      M.Collapsible.init(elems, {
        onOpenStart: (e) => {
          interval = setInterval(() => {
            scrollTo(e);
          }, 10);
        },
        onOpenEnd: () => {
          clearInterval(interval);
        },
      });
    });

    function parseMarkdown(text) {
      const renderer = new marked.Renderer();
      renderer.link = (href, title, text2) => `<a target="_blank" href="${href}">${text2}</a>`;
      renderer.image = (href, title, text2) => `<img src="${href}" alt="${text2}">`;
      renderer.paragraph = (text2) => `<p>${text2}</p>`;
      renderer.code = (code, language) => `<pre><code class="language-${language}">${code}</code></pre>`;
      marked.setOptions({
        renderer,
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        smartLists: true,
        smartypants: false,
        highlight: (code) => hljs.highlightAuto(code).value,
      });
      return DOMPurify.sanitize(marked.parse(text));
    }

    function formatAvatar(review) {
      if (!review?.author_details?.avatar_path) return '';
      if (review.author_details.avatar_path.includes('gravatar')) {
        return review.author_details.avatar_path.slice(1);
      }
      return `https://www.themoviedb.org/t/p/w64_and_h64_face${review.author_details.avatar_path}`;
    }

    return {
      avatar(review) {
        return formatAvatar(review);
      },
      parseMarkdown,
    };
  },
  computed: {
    filteredReviews() {
      return this.reviews.slice(0, 5);
    },
  },
};
</script>

<style scoped>
.collapsible {
  margin-bottom: 2rem;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.avatar img {
  width: 45px;
  min-width: 45px;
}

.collapsible li {
  background-color: #534B6280;
  border: none;
  margin: 0;
}

.collapsible-header {
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  transition: transform 0.2s ease;
}

.collapsible-header.hoverable:hover {
  transform: perspective(1px) scale(1.005);
}

.collapsible-body {
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: none;
}

.no-reviews {
  margin-bottom: 3rem;
}
</style>
