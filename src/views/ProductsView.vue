<script setup lang="ts">

const products = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', handle: '@mdo', },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' },
    { id: 3, firstName: 'Larry', lastName: 'The Bird', handle: '@twitter' },
]

</script>

<template>
    <div class="container-fluid p-4">
        <div class="row mb-3 align-items-center">
            <div class="col-auto">
                <h5 class="mb-0">PRODUCTS</h5>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal"
                    data-bs-target="#addProductModal">
                    <i class="bi bi-plus-circle me-1"></i>
                    NEW
                </button>
            </div>
        </div>
        <div class="card p-0  rounded-0">
            <div class="card-body">
                <table class="table">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody class="table-accordion">
                        <template v-for="product in products" :key="product.id">
                            <tr role="button" data-bs-toggle="collapse" :data-bs-target="`#expandRow${product.id}`"
                                aria-expanded="false" :aria-controls="`expandRow${product.id}`" class="collapsed">
                                <th scope="row">
                                    <span class="bi bi-chevron-up"></span>
                                </th>
                                <td>{{ product.firstName }}</td>
                                <td>{{ product.lastName }}</td>
                                <td>{{ product.handle }}</td>
                            </tr>
                            <tr>
                                <td colspan="4" class="border-0 p-0">
                                    <div class="collapse p-2 border-bottom" :id="`expandRow${product.id}`">
                                        <h1>{{ `${product.firstName} ${product.lastName}` }}</h1>
                                    </div>
                                </td>
                            </tr>
                        </template>

                    </tbody>
                </table>
            </div>
        </div>
    </div>


    <!-- Add Product Modal Start-->
    <div class="modal fade" id="addProductModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">

        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="mb-0">
                        Add New Product
                    </h6>
                </div>
                <div class="modal-body p-4">
                    <form class="row g-3">
                        <div class="col-4">
                            <label for="categoryNameInput" class="form-label">Prouct Name</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-8">
                            <label for="categoryNameInput" class="form-label">Product Description</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-4">
                            <label for="categoryNameInput" class="form-label">Brand Name</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-4">
                            <label for="parentCategorySelect" class="form-label">
                                Category
                            </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected disabled>Select parent menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <label for="parentCategorySelect" class="form-label">
                                Subcategory (Optional)
                            </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected disabled>Select parent menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>


                        <div class="col-4">
                            <label for="categoryNameInput" class="form-label">Product Code</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-4">
                            <label for="categoryNameInput" class="form-label">HSN Code</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-4">
                            <label for="categoryNameInput" class="form-label">SKU</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-4">
                            <label for="categoryNameInput" class="form-label">Maximum Retail Price</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-4">
                            <label for="categoryNameInput" class="form-label">Selling Price</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-4">
                            <label for="categoryNameInput" class="form-label">Quantity</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <!-- <div class="col-4">
                             <label for="categoryNameInput" class="form-label">HSN Code</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required> 
                        </div> -->

                        <div class="col-4">
                            <label for="categoryNameInput" class="form-label">Manufacturer</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-8">
                            <label for="categoryNameInput" class="form-label">Manufacturer Contact Details</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-4">
                            <label for="categoryNameInput" class="form-label">Country Of Origin</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-8">
                            <label for="categoryNameInput" class="form-label">Customer Care Contact Details</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-4">
                            <label for="categoryNameInput" class="form-label">Packer</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="col-8">
                            <label for="categoryNameInput" class="form-label">Packer Contact Details</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>


                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Add Pategory Modal End-->
</template>

<style>
.table-accordion {
    .collapsed {

        span {


            &::before {
                transform: rotate(180deg);
                transition: all 300ms ease-in;
            }
        }

        td,
        th {
            border-bottom-width: 1px;
        }
    }

    span {
        &::before {
            transition: all 300ms ease-in;
        }
    }

    td,
    th {

        border-bottom-width: 0;
        /* transition: all 300ms ease-in; */
    }

}
</style>
