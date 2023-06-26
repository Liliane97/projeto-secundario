<template>
  <div>
    <v-card
    class="mx-auto"
    width="400"
    prepend-icon="mdi-home"
  >
    <template v-slot:title>
      This is a title
    </template>

    <v-card-text>
      This is content
    </v-card-text>
  </v-card>
  </div>
  <div class="mt-5">
    <v-card
    class="mx-auto"
    max-width="344"
    variant="outlined"
  >
    <v-card-item>
      <div>
        <div class="text-overline mb-1">
          OVERLINE
        </div>
        <div class="text-h6 mb-1">
          Headline
        </div>
        <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
      </div>
    </v-card-item>

    <v-card-actions>
      <v-btn variant="outlined">
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>