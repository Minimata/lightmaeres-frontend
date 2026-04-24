<script setup lang="ts">
const email = ref('')
const name = ref('')

const error = ref(false)

async function handleFormSubmit() {
    const response = await $fetch('https://mail.lightmaeres.ch/subscription/form', {
        method: 'POST',
        body: {
            email: email.value,
            name: name.value,
            "74a1f7e6-5333-4978-8f92-376ff72e2254": true,  // Early birds list id
        },
        mode: "cors"
    }).then(_ => {
        navigateTo('subscription-confirmed')
    }).catch(err => {
        console.log(err)
        error.value = true
        setTimeout(() => error.value = false, 5000)
    })

    console.log(response)
}
</script>

<template>
    <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
                <h1 class="text-5xl">Enter the world of <span class="font-bold text-primary italic">Lightmæres</span>
                </h1>
                <p class="py-6">
                    Join the Early bird newsletter!
                </p>
            </div>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div class="card-body">
                    <fieldset class="fieldset">
                        <label class="floating-label">
                            <span>Your Email</span>
                            <input type="email" class="input validator" name="email" required placeholder="Email"
                                   v-model="email"/>
                        </label>
                        <label class="floating-label">
                            <span>Your name (optional)</span>
                            <input type="text" class="input" name="name" placeholder="Name" v-model="name"/>
                        </label>
                        <button class="btn btn-neutral mt-4" @click="handleFormSubmit">Subscribe</button>
                    </fieldset>
                </div>
            </div>
        </div>
        <div class="toast toast-top toast-center">
            <div role="alert" class="alert alert-error" v-show="error">
                <Icon
                    class="w-6 h-6"
                    name="uil:exclamation-circle"
                    alt="Save document"/>
                <span>Subscription failed.</span>
            </div>
        </div>
    </div>
</template>