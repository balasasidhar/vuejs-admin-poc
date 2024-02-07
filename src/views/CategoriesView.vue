<template>
    <div class="container-fluid p-4">
        <div class="row mb-3 align-items-center">
            <div class="col-auto">
                <h5 class="mb-0">CATEGORIES</h5>
            </div>
            <div class="col-auto">
                <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal"
                    data-bs-target="#addCategoryModal">
                    <i class="bi bi-plus-circle me-1"></i>
                    NEW
                </button>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <table class="table table-bordered">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>The Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Add category Modal Start-->
    <div class="modal fade" id="addCategoryModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="mb-0">
                        Add New Category
                    </h6>

                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="categoryNameInput" class="form-label">Category Name</label>
                            <input type="text" name="categoryName" id="categoryNameInput" class="form-control"
                                placeholder="Enter category name" required>
                        </div>
                        <div class="mb-3">
                            <label for="parentCategorySelect" class="form-label">
                                Choose Parent Category (Optional)
                            </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected disabled>Select parent menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
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
    <!-- Add category Modal End-->
</template>
<style></style>
