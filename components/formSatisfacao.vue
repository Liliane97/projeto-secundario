<template>
  <div
    id="avaliacao"
    class="text-center"
  >
    <v-rating
      v-model="nota"
      clearable
      class="ma-2 border-orange-darken-4"
      density="comfortable"
      size="x-large"
      color="primary"
      
      @click="pegarNota(nota)"
    />
  </div>

  <div
    v-if=" !enviado"
    id="formulario"
  >
    <v-sheet
      v-if="exibirFor"
     
      color="transparent"
      class="mx-auto mt-5"
    >
      <v-form @submit.prevent="enviarAvaliacao">
        <v-text-field
          v-model="dadosForm.nome_completo"
          density="comfortable"
          variant="outlined"
          clearable
          label="Nome completo"
        />
        <v-text-field
          v-model="dadosForm.email"
          density="comfortable"
          variant="outlined"
          clearable
          label="E-mail"
        />
        <v-textarea
          v-model="dadosForm.mensagem"
          variant="outlined"
          clearable
          label="Descrição"
        />
        <div id="informacao">
          <v-sheet class="text-black text-caption mb-9 px-2">
            <span>
              *Prezado(a), esta avaliação não será analisada como manifestação de
              Ouvidoria. Servirá apenas para revisarmos e refletirmos sobre as
              informações disponíveis nesta página.</span>
            <span>
              Esclarecemos que os dados fornecidos acima serão tratados com respeito
              à sua privacidade. 
            </span>
          </v-sheet>
        </div>
        <div class="d-flex justify-end">
          <v-btn
            class="me-4 bg-background"
            @click="cancelarAvaliacao()"
          >
            Cancelar
          </v-btn>
          <v-btn
            class="bg-primary"
            type="submit"
          >
            Enviar
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </div>

  <div
    v-else
    id="mensagem-sucesso"
  >
    <v-sheet class="text-black d-flex mx-auto mt-16">
      <v-alert
        type="success"
        closable
        density="comfortable"
        text="Avaliação enviada com sucesso!"
      />
    </v-sheet>
  </div>
</template>
<script setup lang="ts">



const route= useRoute()
const nota = ref(0);
const enviado=ref<boolean>(false)
const exibirFor = ref<boolean>(false);
const cancelar= ref(false)

const dadosForm = ref({
  nome_completo: "",
  mensagem: "",
  email: "",
  tipo_de_satisfacao: nota.value,
  pagina_avaliada: route.fullPath,
});

function pegarNota() {

  exibirFor.value = true
  if(nota.value == 0  ){
    exibirFor.value=!exibirFor.value
  }else if(nota.value != 0 && enviado.value == true){
    enviado.value = !enviado.value;
    exibirFor.value = true;
  }
  return nota.value;
}

function cancelarAvaliacao(){
  cancelar.value =true
  exibirFor.value =false
  
}
async function enviarAvaliacao(evento) {
  if (nota.value === 0) {
    alert("Você deve preencher pelos menos uma estrela");
  } 
}

</script>