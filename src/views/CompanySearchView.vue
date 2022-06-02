<template>
	<v-container>
		<h1>Linkedin Scraper - Lucas Lensi</h1>
		<v-row no-gutters class="mt-10 mb-5">
			<v-text-field class="mr-10" dense @keyup.enter="searchCompanies()" v-model="search" label="Chercher une entreprise"></v-text-field>
			<v-btn color="primary" depressed @click="searchCompanies()" :loading="loadSearch">Rechercher</v-btn>
		</v-row>
		<v-data-table
			:loading="loadSearch"
			:headers="headers"
			:items="companies"
			:items-per-page="10"
			hide-default-footer
		>
			<template slot="item.logo" slot-scope="props">
				<v-img :src="props.item.logo"></v-img>
			</template>
			<template slot="item.link" slot-scope="props">
				<router-link :to="props.item.link">Voir</router-link>
			</template>
		</v-data-table>
	</v-container>
</template>

<script>
import { scrapSearch } from '../services/scrapper.js'

export default {
	name: 'companySearch',
	data() {
		return {
			loadSearch: false,
			search: '',
			headers: [
				{ text: 'Nom', align: 'start', value: 'name' },
				{ text: 'Catégorie', align: 'start', value: 'theme' },
				{ text: 'Nombre d\'abonnés', align: 'start', value: 'subscribers' },
				{ text: '',  align: 'start', value: 'link', sortable: false },
			]
		}
	},
	computed: {
		companies: {
			get: function () { return this.$store.getters.GET_COMPANIES },
			set: function (newValue) { this.$store.dispatch('setCompanies', newValue) }
		}
	},
	mounted() {
	},
	methods: {
		async searchCompanies() {
			this.loadSearch = true;
			const res = await scrapSearch(this.search);
			if (res) {
				this.companies = res;
				this.loadSearch = false;
			}
		}
	}
}
</script>

<style>

</style>