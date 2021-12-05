<template>
  <div :class="type">
    <h3>{{type.charAt(0).toUpperCase() + type.slice(1)}}</h3>
    <div class="cast-list">
      <ul class="collection">
        <li v-for="person in filteredList" :person="person" :key="person.id"
          class="collection-item hoverable avatar">
          <div class="person-container">
            <div class="person-info" @click="goToPerson(person)">
              <img :src="`http://image.tmdb.org/t/p/w45${person.profile_path}`" alt="" class="circle">
              <p><span class="title">
                  <router-link :to="{name:'Person', params:{id:person.id}}">
                    {{person.name}}
                  </router-link>
                </span>
                <span v-if="type==='crew'">{{person.job}}
                  <br /><small>known for</small> {{person.known_for_department}}</span>
                <span v-else-if="type==='cast'">
                  <small>as</small> {{person.character}}
                </span>
              </p>
            </div>
          </div>
          <div class="secondary-links">
            <a :href="`https://www.themoviedb.org/person/${person.id}`" class="secondary-content">
              TMDB
            </a>
            <router-link :to="{name:'Person', params:{id:person.id}}"
              class="secondary-content">
              Details
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  props: {
    list: Array,
    type: String,
  },
  setup(props) {
    const router = useRouter();

    const goToPerson = async (person) => {
      await router.push({
        name: 'Person',
        params: {
          id: person.id,
        },
      });
    };

    let crewList = [];
    if (props.type === 'crew') {
      const seenPerson = new Map();
      crewList = props.list.reduce((acc, cur) => {
        if (!seenPerson.has(cur.id)) {
          const jobs = new Set();
          jobs.add(cur.job);
          seenPerson.set(cur.id, jobs);
          acc.push(cur);
        }
        const seen = seenPerson.get(cur.id);
        const current = acc.map((i) => i.id).indexOf(cur.id);
        if (current !== -1) {
          if (!seen.has(cur.job)) {
            seen.add(cur.job);
            acc[current].job = `${cur.job}, ${acc[current].job}`;
          }
        }
        return acc;
      }, []);
    }

    return {
      goToPerson,
      filteredList: computed(() => ((props.type === 'cast') ? props.list : crewList)),
    };
  },
};
</script>

<style scoped>
.collection {
  margin-top: 1rem;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: 40rem;
  overflow-y: scroll;
  padding-bottom: 2px;
  -webkit-font-smoothing: subpixel-antialiased;
}

.collection .collection-item.avatar {
  background-color: #534B6244;
  text-shadow: none;
  border: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  border-radius: 10px;
  /* transition: transform 0.2s ease, border-radius 0.2s ease-in-out; */
  -webkit-font-smoothing: subpixel-antialiased;
}

.person-container {
  flex: 1;
}

.collection .collection-item.avatar .secondary-content {
  color: #ffab40;
  transition: color 0.3s ease;
  position: unset;
  top: unset;
  right: unset;
  float: unset;
}

.secondary-links {
  padding: 13px 20px;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.collection .collection-item.avatar .secondary-links a:hover {
  color: #ffd8a6;
}

.collection .collection-item.avatar:not(.circle-clipper)>.circle,
.collection .collection-item.avatar :not(.circle-clipper)>.circle {
  height: auto;
  position: unset;
  left: unset;
  width: auto;
  overflow: unset;
  display: block;
  min-width: 45px;
}

.collection-item.hoverable:hover {
  z-index: 10;
  transform: scale(1.01);
  -webkit-font-smoothing: subpixel-antialiased;
  border-radius: 18px;
}

.person-info {
  cursor: pointer;
  display: flex;
  gap: 20px;
  flex: 1;
  padding: 10px 20px;
  height: 100%;
  max-height: 85px;
  -webkit-font-smoothing: subpixel-antialiased;
}

.collection-item .title a {
  color: lightskyblue;
}

.collection-item .title a:hover {
  color: lightsteelblue;
}

.crew,
.cast {
  width: 100%;
  flex: 1;
}

.person-info p {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #f0f0f0;
  -webkit-font-smoothing: subpixel-antialiased;
}

.person-info p span:last-child {
  font-size: 0.95rem;
}
</style>
