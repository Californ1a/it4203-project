<template>
  <div :class="type">
    <h3>{{type.charAt(0).toUpperCase() + type.slice(1)}}</h3>
    <div class="cast-list">
      <ul class="collection">
        <li v-for="person in list" :person="person" :key="person.id"
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

export default {
  props: {
    list: Array,
    type: String,
  },
  setup() {
    const router = useRouter();

    const goToPerson = async (person) => {
      console.log('person', person);
      await router.push({
        name: 'Person',
        params: {
          id: person.id,
        },
      });
    };

    return {
      goToPerson,
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
}

.collection .collection-item.avatar {
  background-color: #534B6244;
  text-shadow: none;
  border: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  border-radius: 10px;
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
  /* box-shadow: 0 8px 17px 0 rgba(255, 255, 255, 0.1), 0 6px 20px 0 rgba(255, 255, 255, 0.09); */
  z-index: 10;
  transform: scale(1.02);
  /* display: table; */
  /* zoom: 1.02; */
  transition: transform 0.15s ease, border-radius 0.2s ease-in-out;
  border-radius: 20px;
}

.person-info {
  cursor: pointer;
  display: flex;
  gap: 20px;
  flex: 1;
  padding: 10px 20px;
  height: 100%;
  max-height: 85px;
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
}

.person-info p span:last-child {
  font-size: 0.96rem;
  /* padding-bottom: 3px; */
}
</style>