
    document.getElementById('toggle-footer').addEventListener('click', function() {
        var footer = document.getElementById('footer');
        var icon = this.querySelector('i');

        if (footer.classList.contains('hidden')) {
            footer.classList.remove('hidden');
        } else {
            footer.classList.add('hidden');
        }
    });

