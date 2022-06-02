<template>
	<v-container>
		<loaderComponent v-if="!loaded"></loaderComponent>
		<div v-else-if="notFound">
			<h1>Aucune entreprise trouvée</h1>
		</div>
		<v-card
			v-else
			class="mx-auto pa-4"
			max-width="600"
			outlined
		>
			<v-row no-gutters>
				<v-card-title class="text-h5 mb-1">
					{{company.name}}
				</v-card-title>
				<v-spacer></v-spacer>
				<v-list-item-avatar tile size="80" color="grey">
					<v-img :src="company.base64Logo"></v-img>
				</v-list-item-avatar>
			</v-row>
			<v-list>
				<v-list-item v-if="company.foundedDate" class="align-start">
					<v-list-item-icon>
						<v-icon>
							mdi-calendar
						</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-subtitle>
							Fondée en :
						</v-list-item-subtitle>
						<v-list-item-subtitle class="font-weight-bold">
							{{company.foundedDate}}
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
				<v-list-item v-if="company.webSite" class="align-start">
					<v-list-item-icon>
						<v-icon>
							mdi-web
						</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-subtitle>
							Site web :
						</v-list-item-subtitle>
						<v-list-item-subtitle>
							<a class="font-weight-bold" :href="company.webSite" target="_blank">
								{{company.webSite}}
							</a>
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
				<v-list-item v-if="company.employeeCount" class="align-start">
					<v-list-item-icon>
						<v-icon>
							mdi-account-multiple
						</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-subtitle>
							Nombre d'employés :
						</v-list-item-subtitle>
						<v-list-item-subtitle class="font-weight-bold">
							{{company.employeeCount}}
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
				<v-list-item v-if="company.linkedinEmployeeCount" class="align-start">
					<v-list-item-icon>
						<v-icon>
							mdi-linkedin
						</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-subtitle>
							Nombre d'employés sur Linkedin :
						</v-list-item-subtitle>
						<v-list-item-subtitle class="font-weight-bold">
							{{company.linkedinEmployeeCount}}
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
				<v-list-item v-if="company.description" class="align-start">
					<v-list-item-icon>
						<v-icon>
							mdi-text-long
						</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-subtitle>
							Présentation :
						</v-list-item-subtitle>
						<pre style="white-space: pre; white-space: pre-wrap;" class="font-weight-bold">{{company.description}}</pre>
					</v-list-item-content>
				</v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { scrapeCompany } from '../services/scrapper.js'
import loaderComponent from '../components/LoaderComponent.vue';

export default {
  name: 'CompanyInformations',
  components: {
    loaderComponent
  },
  data() {
    return {
      loaded: false,
      company: {},
			notFound: false
    }
  },
  mounted() {
    this.getCompanyInformations();
  },
  methods: {
    async getCompanyInformations() {
      const res = await scrapeCompany(this.$route.params.companyName);
      if (res) {
				if (Object.keys(res).length === 0)
					this.notFound = true;
        this.company = res;
        this.loaded = true;
      } else {
					this.notFound = true;
			}
    }
  }
}
</script>

<style>
  .align-start {
    text-align:start !important
  }
</style>