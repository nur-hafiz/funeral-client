<template>
    <div>
        <h2 class="display-5 mb-4 mt-5">How we support you</h2>
        <div class="container-fluid px-0 mb-4"> 
            <ul class="row px-0 list-unstyled">
                <li class="mb-4 mb-md-0 col-sm-6 col-md-3">
                    <Card class="h-100"> <!-- Ensure Card takes full height -->
                        <template #header>
                            <div>
                                <img class="w-100"
                                    alt="A serene grave adorned with flowers and a dignified statue of a man paying tribute to the departed" 
                                    src="@/assets/images/serene.png" />
                            </div>
                        </template>
                        <template #title>Timeliness</template>
                        <template #content>
                            <p>We understand the importance of prompt arrangements, ensuring a smooth process during a challenging time.</p>
                        </template>
                    </Card>
                </li>
                <li class="mb-4 mb-md-0 col-sm-6 col-md-3">
                    <Card class="h-100">
                        <template #header>
                            <div>
                                <img class="w-100"
                                    alt="Two black lanterns sitting in a serene decorated grave" 
                                    src="@/assets/images/lanterns.png" />
                            </div>
                        </template>
                        <template #title>Efficiency</template>
                        <template #content>
                            <p>Our streamlined procedures and experienced team minimize stress, allowing you to focus on honoring your loved ones.</p>
                        </template>
                    </Card>
                </li>
                <li class="mb-4 mb-md-0 col-sm-6 col-md-3">
                    <Card class="h-100">
                        <template #header>
                            <div>
                                <img class="w-100"
                                    alt="A man standing among rows of tombstones in a cemetery" 
                                    src="@/assets/images/praying.png" />
                            </div>
                        </template>
                        <template #title>Gentleness</template>
                        <template #content>
                            <p>With compassion and sensitivity, we handle every detail with care and respect, providing solace during this difficult period.</p>
                        </template>
                    </Card>
                </li>
                <li class="mb-4 mb-md-0 col-sm-6 col-md-3">
                    <Card class="h-100">
                        <template #header>
                            <div>
                                <img class="w-100"
                                    alt="A cemetery with numerous graves and a sign indicating the location" 
                                    src="@/assets/images/cemetery.png" />
                            </div>
                        </template>
                        <template #title>Transparency</template>
                        <template #content>
                            <p>Our transparent pricing ensures clarity and honesty, empowering you to make informed decisions with confidence.</p>
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
