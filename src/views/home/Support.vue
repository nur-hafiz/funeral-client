<template>
    <div>
        <h2 class="display-5 mb-4 mt-5">How we support you</h2>
        <div class="container-fluid px-0 mb-4"> 
            <ul class="row px-0 list-unstyled">
                <li class="mb-4 mb-lg-0 col-lg-4">
                    <Card class="h-100"> <!-- Ensure Card takes full height -->
                        <template #title>Timeliness</template>
                        <template #content>
                            <p>We understand the importance of prompt arrangements, ensuring a smooth process during a challenging time.</p>
                        </template>
                    </Card>
                </li>
                <li class="mb-4 mb-lg-0 col-lg-4">
                    <Card class="h-100">
                        <template #title>Efficiency</template>
                        <template #content>
                            <p>Our streamlined procedures and experienced team minimize stress, allowing you to focus on honoring your loved ones.</p>
                        </template>
                    </Card>
                </li>
                <li class="mb-4 mb-lg-0 col-lg-4">
                    <Card class="h-100">
                        <template #title>Gentleness</template>
                        <template #content>
                            <p>With compassion and sensitivity, we handle every detail with care and respect, providing solace during this difficult period.</p>
                        </template>
                    </Card>
                </li>
            </ul>
        </div>

        <div class="d-flex flex-column align-items-center">
            <h3 class="lead mb-3">Discover peace and closure with us.</h3>
            <router-link to="/packages">
                <Button class="position-relative" style="top: -1px" label="Explore our offerings" />
            </router-link>
        </div>
    </div>
</template>